import { FunctionComponent } from "react";
import { BaseConnexion } from "../components/connexion/base-connexion";
import { CustomInput } from "../components/form/custom-input";
import { CustomButton } from "../components/form/custom-button";
import { CustomLinkConnexion } from "../components/form/custom-link";
import { usePhoneField } from "../hooks/use-phone-field";

export const SignUpPage: FunctionComponent = () => {
    const { phoneField, handlePhoneField } = usePhoneField()
    return (
        <BaseConnexion title="s'inscrire" >
            <form className="relative w-full my-4">
                <CustomInput
                    type="text"
                    name="phone"
                    field={phoneField}
                    onChange={handlePhoneField}
                    fontawesome="fa fa-phone"
                    placeholder="03x xx xxx xx"
                />
                <CustomInput
                    type="text"
                    name="pseudo"
                    field={ }
                    onChange={ }
                    fontawesome="fa fa-user"
                    placeholder="Pseudo" />
                {/*<CustomInput fontawesome="fa fa-lock" placeholder="Mot de passe" />
                <CustomInput fontawesome="fa fa-unlock" placeholder="Confirmer le mot de passe" /> */}
                <CustomButton text="s'inscrire" isLoading={false} />
                <CustomLinkConnexion text="Se connecter" road="/login" />
            </form>
        </BaseConnexion>
    )
}