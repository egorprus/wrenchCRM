import React, { useState } from "react";
import './style.scss';
import '../style.scss';
import { FieldValues, useForm } from "react-hook-form";
import { InputText } from "../../components/InputText/InputText";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { AddressItem } from "./AddressItem";
import { minLength, required } from "../../utils/validate";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { NotResult } from "../../components/NotResult/NotResult";

interface requestData {
    data: {
        [property: string ]: null | string
    },
    unrestricted_value: string,
    value: string
}

export const Address = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [resultList, setResultList] = useState<requestData[]>([]);
    const onSubmit = (data: FieldValues) => {
        fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token 5f3d76990ba44e4880cd84030b012399aa956db8"
            },
            body: JSON.stringify({query: data.searchInput})
        })
            .then(response => response.json())
            .then(result => {
                setResultList(result.suggestions)})
            .catch(error => console.log("error", error));
    }
    return (
        <section className="section">
            <SectionTitle text='Поиск адресов' subtitle="Введите интересующий вас адрес" />
            <div className="section__content">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <InputText
                        register={register(FIELD.name, {validate: {...FIELD.validate}})}
                        errors={errors.searchInput?.message}
                    />
                    <SearchButton />
                </form>
                {resultList.length ?
                    <article className="article">
                        <h1 className="section__title">
                            Адреса
                        </h1>
                        <ul className="result">
                            {resultList.map((item, index) => (
                                <AddressItem key={index} text={item.unrestricted_value} />
                            ))}
                        </ul>
                    </article>
                    : <SectionTitle text="Not found result" />
                }
            </div>
        </section>
    );
};

const FIELD = {
    name: 'searchInput',
    validate: {
        min: minLength(3),
        required: required
    },
}