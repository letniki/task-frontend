import React, {FC, useState} from 'react';
import {ITypeObjResponse} from "../../interfaces/typeObj/ITypeObjResponse";
import {deleteTypeObject, updateTypeObj} from "../../services/typeObjService";
import {SubmitHandler, useForm} from "react-hook-form";

interface IProps {
    typeObject: ITypeObjResponse
}
interface IFormData {
    parent: {id: number} | null;
    name: string,
    shortName: string,
    code: string,
    description: string,

}
const TypeObjectComponent:FC<IProps> = ({typeObject}) => {
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
            const {parent, name, shortName ,code, description} = data;
            const typeObjData = {parent, name, shortName, code, description};
            await updateTypeObj(typeObject.id, typeObjData);
        }catch (error){
            alert("Please try again.");
        }
    }

    const handleDelete = async () => {
        if (window.confirm(`Видалити об'єкт "${typeObject.name}"?`)) {
            try {
                await deleteTypeObject(typeObject.id);

            } catch (err) {
                console.error("Помилка при видаленні:", err);
            }
        }
    };
    return (
        <div>
            <div>{typeObject.id} - {typeObject.name}</div>
            <div>{typeObject.code} - {typeObject.shortName}</div>
            <div>{typeObject.description}</div>

            {
                typeObject.parent && (<>
                    <h3>Parent:</h3>
                    <div>{typeObject.parent.id} - {typeObject.parent.name}</div>
                    <div>{typeObject.parent.code} - {typeObject.parent.shortName}</div>
                    <div>{typeObject.parent.description}</div>
                </>)
            }
            <button onClick={handleDelete}>delete type object</button>
            <button onClick={handleTogle}>show update form</button>
            {isOpened && (<form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("parent.id")}
                    type="number"
                    placeholder={"parentId"}
                />
                <input
                    {...register("name", {required: "name required"})}
                    type="text"
                    placeholder={"name"}
                />
                <input
                    {...register("shortName", {required: "shortName required"})}
                    type="text"
                    placeholder={"shortName"}
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

                <button type="submit">
                    update type object
                </button>
            </form>)}
            <hr/>
        </div>
    );
};

export default TypeObjectComponent;