import React, { FunctionComponent } from "react";
import { BaseConnexion } from "../components/connexion/base-connexion";
import { CustomInput } from "../components/form/custom-input";
import { CustomButton } from "../components/form/custom-button";
import { CustomLinkConnexion } from "../components/form/custom-link";
import { usePhoneField } from "../hooks/use-phone-field";
import { usePseudoField } from "../hooks/use-pseudo-field";
import { usePasswordField } from "../hooks/use-password-field";
import { useConfirmPasswordField } from "../hooks/use-confirm-password-field";
import { useSignup } from "../api/users/user-api";

export const SignUpPage: FunctionComponent = () => {
    const { phoneField, handlePhoneField } = usePhoneField()
    const { pseudoField, handlePseudoField } = usePseudoField()
    const { passwordField, handlePasswordField } = usePasswordField()
    const { confirmPasswordField, handleConfirmPasswordField } = useConfirmPasswordField()

    const { stateSignup, signup } = useSignup()
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        signup(phoneField, pseudoField, passwordField, confirmPasswordField)
    }
    return (
        <BaseConnexion title="s'inscrire" >
            <form className="relative w-full my-4" onSubmit={onSubmit}>
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
                    field={pseudoField}
                    onChange={handlePseudoField}
                    fontawesome="fa fa-user"
                    placeholder="Pseudo" />
                <CustomInput
                    type="password"
                    name="password"
                    field={passwordField}
                    onChange={handlePasswordField}
                    fontawesome="fa fa-lock"
                    placeholder="Mot de passe" />
                <CustomInput
                    type="password"
                    name="confirmPassword"
                    field={confirmPasswordField}
                    onChange={(e) => handleConfirmPasswordField(e, passwordField.value)}
                    fontawesome="fa fa-unlock"
                    placeholder="Confirmer le mot de passe" />
                <CustomButton text="s'inscrire" isLoading={stateSignup.isLoading} />
                <CustomLinkConnexion text="Se connecter" road="/login" />
            </form>
        </BaseConnexion>
    )
}