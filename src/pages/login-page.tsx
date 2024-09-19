import { BaseConnexion } from '../components/connexion/base-connexion';
import { FunctionComponent } from "react";
import { CustomInput } from '../components/form/custom-input';
import { CustomButton } from '../components/form/custom-button';
import { CustomLinkConnexion } from '../components/form/custom-link';
import { NavLink } from 'react-router-dom';

export const LoginPage: FunctionComponent = () => {
    return (
        <BaseConnexion title="se connecter" >
            <form className="relative w-full my-4">
                <CustomInput
                    type="text"
                    name="phone"
                    fontawesome="fa fa-phone"
                    placeholder="03x xx xxx xx" />
                <CustomInput fontawesome="fa fa-lock" placeholder="Mot de passe" />
                <CustomButton text="se connecter" />
                <NavLink to='' className='block text-end text-xs text-blue-500 mt-2 mb-[-1em] px-2 '>Mot de passe oublié ?</NavLink>
                <CustomLinkConnexion text="S'inscrire" road="/signup" />
            </form>
        </BaseConnexion>
    )
}