import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {createLibParam} from "../../services/libParamService";

interface IFormData {
    typeParam: {id: number } | null,
    code: string,
    name: string,
    description: string
}

const CreateLibParamComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormData>({
        defaultValues: {
            typeParam: null,
            name: "Родовище",
            code: "FIELD",
            description: "Тип параметра у межах геології",
        }
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormData> = async (data) =>{
        try {
            const {typeParam,name, code, description} = data;
            const libParamData = {typeParam, name, code, description};
            await createLibParam(libParamData);
            navigate("/lib-param");
        }catch (error){
            alert("Please try again.");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    create lib param
                </button>
            </form>
        </div>
    );
};

export default CreateLibParamComponent;