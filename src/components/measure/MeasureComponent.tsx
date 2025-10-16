import React, {FC, useState} from 'react';
import {IMeasureResponse} from "../../interfaces/measure/IMesureResponse";
import {deleteMeasure, updateMeasure} from "../../services/measureService";
import {SubmitHandler, useForm} from "react-hook-form";

interface IProps {
    measure: IMeasureResponse
}
interface IFormData {
    parent: {id: number} | null;
    name: string,
    code: string,
    shortName: string,
    description: string,

}
const MeasureComponent: FC<IProps> = ({measure}) => {
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
            const {parent, name, code,shortName , description} = data;
            const measureData = {parent, name, code, shortName, description};
            await updateMeasure(measure.id, measureData);
        }catch (error){
            alert("Please try again.");
        }
    }
    const handleDelete = async () => {
        if (window.confirm(`Видалити одиницю вимірювання ${measure.name}?`)) {
            try {
                await deleteMeasure(measure.id);

            } catch (err) {
                console.error("Помилка при видаленні:", err);
            }
        }
    };
    return (
        <div>
            <div>{measure.id} - {measure.name}</div>
            <div>{measure.code} - {measure.shortName}</div>
            <div>{measure.description}</div>

            {
                measure.parent && (<>
                    <h3>Parent:</h3>
                    <div>{measure.parent.id} - {measure.parent.name}</div>
                    <div>{measure.parent.code} - {measure.parent.shortName}</div>
                    <div>{measure.parent.description}</div>
                </>)
            }
            <button onClick={handleDelete}>delete measure</button>
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
                    update measure
                </button>
            </form>)}
            <hr/>
        </div>
    );
};

export default MeasureComponent;