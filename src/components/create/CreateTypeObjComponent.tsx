import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {createTypeObj} from "../../services/typeObjService";
interface IFormData {
    parent: {id: number} | null;
    name: string,
    shortName: string,
    code: string,
    description: string,

}
const CreateTypeObjComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormData>({
        defaultValues: {
            parent: null,
            name: "Родовище",
            shortName: "ROD",
            code: "FIELD",
            description: "Тип об’єкта геологічного характеру",

        }
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormData> = async (data) =>{
        try {
            const {parent, name, shortName ,code, description} = data;
            const typeObjData = {parent, name, shortName, code, description};
            await createTypeObj(typeObjData);
            navigate("/type-obj");
        }catch (error){
            alert("Please try again.");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    create type object
                </button>
            </form>
        </div>
    );
};

export default CreateTypeObjComponent;