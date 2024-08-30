import { FunctionComponent } from "react";
import { BaseConnexion } from "../components/connexion/base-connexion";
import { CustomInput } from "../components/form/CustomInput";
import { CustomLinkRed } from "../components/form/CustomLink";

export const SignUpPage: FunctionComponent = () => {
    return (
        <BaseConnexion title="s'inscrire" >
            <form className="w-full my-4">
                <CustomInput fontawesome="fa fa-phone" placeholder="03x xx xxx xx"/>
                <CustomInput fontawesome="fa fa-user" placeholder="Pseudo"/>
                <CustomInput fontawesome="fa fa-lock" placeholder="Mot de passe"/>
                <CustomInput fontawesome="fa fa-unlock" placeholder="Confirmer le mot de passe"/>
                <CustomLinkRed text="s'inscrire" road=""/>
            </form>
        </BaseConnexion>
    )
}