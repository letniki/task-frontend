import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {createTypeParam} from "../../services/typeParamService";

interface IFormData {
    name: string,
    code: string,
    description: string,
    parent: {id: number} | null;
}
const CreateTypeParamComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormData>({
        defaultValues: {
            name: "Родовище",
            code: "FIELD",
            description: "Тип параметра у межах геології",
            parent:  null
        }
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormData> = async (data) =>{
        try {
            const {name, code, description, parent} = data;
            const typeParamData = {name, code, description, parent};
            await createTypeParam(typeParamData);
            navigate("/type-param");
        }catch (error){
            alert("Please try again.");
        }
    }
    return (
        <div>
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
                    create type param
                </button>
            </form>
        </div>
    );
};

export default CreateTypeParamComponent;