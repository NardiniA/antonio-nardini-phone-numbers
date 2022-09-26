import React from "react";
import { useForm } from "react-hook-form";
import { getNumbers } from "@/libs/getNumbers";
import { removeDuplicates } from "@/libs/removeDuplicates";

const Input = ({ setNumbers, setAlert, setIsLoading }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data, event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const res = await getNumbers(data);
            if (res) {
                const results = await Promise.all(res);
                const flat = results.flat();
                const removedDuplicates = removeDuplicates(flat);
                setNumbers(removedDuplicates);
                setAlert({
                    message: `We found ${removedDuplicates.length} results for you :)`,
                    type: "success"
                });
            }
        } catch (error) {
            console.error(error);
            setNumbers(null);
            setAlert({
                message: "Sorry, an unknown error has occured :(",
                type: "error"
            });
        }
        setIsLoading(false);
    };

    return (
        <div className="row">
            <div className="column lg-12 s-phone-search">
                <div>
                    <form
                        id="search-form"
                        className={`search-form ${errors["town"] && "form--error"}`}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="text"
                            placeholder="Town or Postcode"
                            className={errors["town"] && "input--error"}
                            {...register("town", {
                                required: {
                                    value: true,
                                    message: "The Town or Postcode field is required.",
                                },
                            })}
                        />
                        <input
                            type="text"
                            placeholder="Street"
                            className={errors["street"] && "input--error"}
                            {...register("street", {})}
                        />
                        <button
                            type="submit"
                            name="search"
                            className="btn btn--primary u-fullwidth btn--submit"
                        >
                            Search
                        </button>
                    </form>
                    {errors["town"] && <p className="error-status search-form-error-msg">{errors["town"].message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Input;
