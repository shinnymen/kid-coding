import React, { useState } from "react";
import {
  Container,
  FormH4,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./SignupElements";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";

const options = ["Houilles", "Rochefort en Yvelines"];
const defaultOption = options["Ecole"];

const SignUp = () => {
  const [ecole, setEcole] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [nomEnfant, setNomEnfant] = useState("");
  const [ageEnfant, setAgeEnfant] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const [submit, setSubmit] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const prenomError = document.querySelector(".prenom.error");
    const nomError = document.querySelector(".nom.error");
    const telephoneError = document.querySelector(".telephone.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || terms.checked) {
      if (password !== controlPassword) {
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
        if (!terms.checked)
          termsError.innerHTML = "Veuillez valider les conditions générales";
      } else {
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/user/register`,
          data: {
            prenom,
            nom,
            email,
            telephone,
            nomEnfant,
            ageEnfant,
            password,
          },
        })
          .then((res) => {
            if (res.data.errors) {
              prenomError.innerHTML = res.data.errors.prenom;
              nomError.innerHTML = res.data.errors.nom;
              emailError.innerHTML = res.data.errors.email;
              telephoneError.innerHTML = res.data.errors.telephone;
              passwordError.innerHTML = res.data.errors.password;
            } else {
              setSubmit(true);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <>
      {submit ? (
        <>
          <Container height="100%">
            <Icon to="/">Kid Coding</Icon>
            <span></span>
            <FormH4 className="white">
              Vous êtes maintenant inscrit! Happy Coding!
            </FormH4>
          </Container>
        </>
      ) : (
        <Container>
          <FormWrap>
            <Icon to="/">Kid Coding</Icon>
            <FormContent onSubmit={handleRegister}>
              <Form action="#">
                <FormH1>S'inscrire</FormH1>
                <FormLabel htmlFor="ecole">Ecole</FormLabel>
                <Dropdown
                  name="ecole"
                  id="ecole"
                  options={options}
                  defaultOption={defaultOption}
                  placeholder="Choisir l'école"
                  onChange={setEcole}
                  value={ecole}
                />
                <FormLabel htmlFor="prenom">Prenom</FormLabel>
                <FormInput
                  type="text"
                  name="prenom"
                  id="prenom"
                  onChange={(e) => setPrenom(e.target.value)}
                  value={prenom}
                  required
                />
                <div className="prenom error"></div>
                <FormLabel htmlFor="Nom">Nom</FormLabel>
                <FormInput
                  type="text"
                  name="nom"
                  id="nom"
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                  required
                />
                <div className="nom error"></div>
                <FormLabel htmlFor="telephone">Telephone</FormLabel>
                <FormInput
                  type="telephone"
                  name="telephone"
                  id="telephone"
                  onChange={(e) => setTelephone(e.target.value)}
                  value={telephone}
                  required
                />
                <div className="telephone error"></div>
                <FormLabel htmlFor="email" id="email">
                  Email
                </FormLabel>
                <FormInput
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <div className="email error"></div>
                <FormLabel htmlFor="for" id="nomEnfant">
                  Nom de l'enfant
                </FormLabel>
                <FormInput
                  type="text"
                  onChange={(e) => setNomEnfant(e.target.value)}
                  value={nomEnfant}
                  required
                />
                <FormLabel htmlFor="for" id="ageEnfant">
                  {" "}
                  Age de l'enfant
                </FormLabel>
                <FormInput
                  type="date"
                  onChange={(e) => setAgeEnfant(e.target.value)}
                  value={ageEnfant}
                  required
                />
                <FormLabel htmlFor="password" id="password">
                  {" "}
                  Password
                </FormLabel>
                <FormInput
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <div className="password error"></div>
                <FormLabel htmlFor="password-conf"> Confirm Password</FormLabel>
                <FormInput
                  type="password"
                  id="password-conf"
                  onChange={(e) => setControlPassword(e.target.value)}
                  value={controlPassword}
                  required
                />
                <div className="password-confirm error"></div>
                <input type="checkbox" id="terms" />
                <FormLabel htmlFor="terms">
                  J'accepte les{" "}
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    conditions generales
                  </a>
                </FormLabel>
                <div className="terms error"></div>
                <br />
                <FormButton type="submit">Valider inscription</FormButton>

                <Text>Mot de passe oublié</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      )}
    </>
  );
};

export default SignUp;
