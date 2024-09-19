import { BaseConnexion } from '../components/connexion/base-connexion';
import { FunctionComponent } from "react";
import { CustomInput } from '../components/form/custom-input';
import { CustomButton } from '../components/form/custom-button';
import { CustomLinkConnexion } from '../components/form/custom-link';
import { NavLink } from 'react-router-dom';
import { usePhoneField } from '../hooks/use-phone-field';
import { usePasswordField } from '../hooks/use-password-field';
import { useAuth } from '../api/user/use-auth-api';

export const LoginPage: FunctionComponent = () => {
    const { phoneField, handlePhoneField } = usePhoneField()
    const { passwordField, handlePasswordField } = usePasswordField()

    const { stateAuth, login } = useAuth()
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(phoneField, passwordField)
    }
    return (
        <BaseConnexion title="se connecter" >
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
                    type="password"
                    name="password"
                    field={passwordField}
                    onChange={handlePasswordField}
                    fontawesome="fa fa-lock"
                    placeholder="Mot de passe"
                />
                <CustomButton text="se connecter" isLoading={stateAuth.isLoading} />
                <NavLink to='' className='block text-end text-xs text-blue-500 mt-2 mb-[-1em] px-2 '>Mot de passe oublié ?</NavLink>
                <CustomLinkConnexion text="S'inscrire" road="/signup" />
            </form>
        </BaseConnexion>
    )
}