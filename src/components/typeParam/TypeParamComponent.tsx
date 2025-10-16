import React, {FC, useState} from 'react';
import {ITypeParamResponse} from "../../interfaces/typeParam/ITypeParamResponse";
import {deleteTypeParam, updateTypeParam} from "../../services/typeParamService";
import {SubmitHandler, useForm} from "react-hook-form";

interface IProps {
    typeParam: ITypeParamResponse
}
interface IFormData {
    name: string,
    code: string,
    description: string,
    parent: {id: number} | null;
}
const TypeParamComponent: FC<IProps> = ({typeParam}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)

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
            const {name,code, description, parent} = data;
            const typeParamData = {name, code, description, parent};
            await updateTypeParam(typeParam.id, typeParamData);
        }catch (error){
            alert("Please try again.");
        }
    }

    const handleDelete = async () => {
        if (window.confirm(`Видалити об'єкт "${typeParam.name}"?`)) {
            try {
                await deleteTypeParam(typeParam.id);

            } catch (err) {
                console.error("Помилка при видаленні:", err);
            }
        }
    };
    return (
        <div>
                <div>{typeParam.id} - {typeParam.name}</div>
                <div>{typeParam.code}</div>
                <div>{typeParam.description}</div>

                {
                    typeParam.parent && (<>
                        <h3>Parent:</h3>
                        <div>{typeParam.parent.id} - {typeParam.parent.name}</div>
                        <div>{typeParam.parent.code}</div>
                        <div>{typeParam.parent.description}</div>
                    </>)
                }
                <button onClick={handleDelete}>delete type param</button>
            <button onClick={handleTogle}>show update form</button>
            {isOpened && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", {required: "name required"})}
                        type="text"
                        placeholder={"name"}
                    />
                    <input
                        {...register("code", {required: "code required"})}
                        type="text"
                        placeholder={"code"}

                    />
                    <input
                        {...register("description", {required: "description required"})}
                        type="text"
                        placeholder={"description"}
                    />
                    <input
                        {...register("parent.id")}
                        type="number"
                        placeholder={"parentId"}
                    />
                    <button type="submit">
                        update type param
                    </button>
                </form>)}
            <hr/>
        </div>
    );
};

export default TypeParamComponent;