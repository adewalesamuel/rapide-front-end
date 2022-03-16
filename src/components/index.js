import { Header } from "./header";
import { Footer } from "./footer";
import { CommandeForm } from "./commandeForm";
import { UserForm } from "./userForm";
import { Paiement } from "./paiement";
import { CommandeFin } from "./commandeFin";
import { DepannageRapideForm } from "./depannageRapideForm";
import { CoutDepannage } from "./coutDepannage";
import { ServiceBox } from "./serviceBox";
import { FooterMobile } from "./footerMobile";
import { HeaderMobile } from "./headerMobile";

export const Components = {
    Header,
    Footer,
    CommandeForm,
    UserForm,
    Paiement,
    CommandeFin,
    CoutDepannage,
    DepannageRapideForm,
    ServiceBox,
    Mobile: {
        Footer: FooterMobile,
        Header: HeaderMobile
    }
}