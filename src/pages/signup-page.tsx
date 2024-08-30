import { FunctionComponent } from "react";
import { BaseConnexion } from "../components/connexion/base-connexion";
import { CustomInput } from "../components/form/CustomInput";
import { CustomButton } from "../components/form/CustomButton";
import { CustomLinkConnexion } from "../components/form/CustomLink";

export const SignUpPage: FunctionComponent = () => {
    return (
        <BaseConnexion title="s'inscrire" >
            <form className="relative w-full my-4">
                <CustomInput fontawesome="fa fa-phone" placeholder="03x xx xxx xx" />
                <CustomInput fontawesome="fa fa-user" placeholder="Pseudo" />
                <CustomInput fontawesome="fa fa-lock" placeholder="Mot de passe" />
                <CustomInput fontawesome="fa fa-unlock" placeholder="Confirmer le mot de passe" />
                <CustomButton text="s'inscrire" />
                <CustomLinkConnexion text="Se connecter" road="/login" />
            </form>
        </BaseConnexion>
    )
}