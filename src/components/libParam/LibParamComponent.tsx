import React, {FC, useState} from 'react';
import {ILibParamResponse} from "../../interfaces/libParam/ILibParamResponse";
import {deleteLibParam, updateLibParam} from "../../services/libParamService";
import {SubmitHandler, useForm} from "react-hook-form";

interface IProps {
    libParam: ILibParamResponse
}
interface IFormData {
    typeParam: {id: number } | null,
    code: string,
    name: string,
    description: string
}
const LibParamComponent: FC<IProps>= ({libParam}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormData>();

    const handleTogle = () => {
        setIsOpened(!isOpened);
    };
    const onSubmit: SubmitHandler<IFormData> = async (data) =>{
        try {
            const {typeParam,name, code, description} = data;
            const libParamData = {typeParam, name, code, description};
            await updateLibParam(libParam.id, libParamData);
        }catch (error){
            alert("Please try again.");
        }
    }
    const handleDelete = async () => {
        if (window.confirm(`Видалити параметр "${libParam.name}"?`)) {
            try {
                await deleteLibParam(libParam.id);

            } catch (err) {
                console.error("Помилка при видаленні:", err);
            }
        }
    };
    return (
        <div>
            <p>{libParam.id} - {libParam.name}</p>
            <div>{libParam.code}</div>
            <div>{libParam.description}</div>
            {
                libParam.typeParam && (
                    <div>
                        <h3>Parent:</h3>
                        <div>{libParam.typeParam.id}</div>
                        <div> {libParam.typeParam.name}</div>
                        <div>{libParam.typeParam.code}</div>
                        <div>{libParam.typeParam.description}</div>

                    </div>)}
            <button onClick={handleDelete}>delete lib param</button>
            <button onClick={handleTogle}>show update form</button>
            {isOpened && (<form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("typeParam.id")}
                    type="number"
                    placeholder={"typeParamId"}
                />
                <input
                    {...register("code", {required: "code required"})}
                    type="text"
                    placeholder={"code"}

                />
                <input
                    {...register("name", {required: "name required"})}
                    type="text"
                    placeholder={"name"}
                />
                <input
                    {...register("description", {required: "description required"})}
                    type="text"
                    placeholder={"description"}
                />
                <button type="submit">
                    update lib param
                </button>
            </form>)}
            <hr/>
        </div>
    );
};

export default LibParamComponent;