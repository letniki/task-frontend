import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {createMeasure} from "../../services/measureService";
interface IFormData {
    parent: {id: number} | null;
    name: string,
    code: string,
    shortName: string,
    description: string,

}
const CreateMeasureComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormData>({
        defaultValues: {
            parent: null,
            name: "Метр",
            code: "M",
            shortName: "M",
            description: "Основна одиниця довжини",

        }
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormData> = async (data) =>{
        try {
            const {parent, name, code,shortName , description} = data;
            const measureData = {parent, name, code, shortName, description};
            await createMeasure(measureData);
            navigate("/measure");
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
                    {...register("code", {required: "code required"})}
                    type="text"
                    placeholder={"code"}

                />
                <input
                {...register("shortName", {required: "shortName required"})}
                type="text"
                placeholder={"shortName"}
                />
                <input
                    {...register("description", {required: "description required"})}
                    type="text"
                    placeholder={"description"}
                />

                <button type="submit">
                    create measure
                </button>
            </form>
        </div>
    );
};

export default CreateMeasureComponent;