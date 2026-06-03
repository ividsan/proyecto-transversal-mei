<template>
  <main class="page">
    <section class="layout" aria-label="Contacte">
      <div class="col-left">
        <h1 class="title">CONTACTA&apos;NS</h1>
        <p class="email">esclat@gmail.com</p>

        <form class="contact-form" aria-label="Formulari de contacte">
          <div class="field">
            <label class="label" for="email">Correu electrònic</label>
            <input id="email" class="input" type="email" />
          </div>

          <div class="field">
            <label class="label" for="nom">Nom</label>
            <input id="nom" class="input" type="text" />
          </div>

          <div class="field">
            <label class="label" for="missatge">Missatge</label>
            <textarea id="missatge" class="input input--message"></textarea>
          </div>

          <button class="send-button" type="button">Enviar</button>
        </form>
      </div>

      <div class="col-right">
        <h2 class="community-title">UNEIX-TE A LA<br />NOSTRA COMUNITAT</h2>

        <details class="community">
          <summary class="community-summary">
            <div class="community-box">
              <p class="community-box-text">
                Uneix-te a la comunitat del festival i sigues el primer a descobrir totes les novetats. Rep descomptes
                exclusius, accés a promocions especials, notícies, anuncis d’artistes i moltes sorpreses més. No et
                perdes res!
              </p>
              <span class="community-chevron" aria-hidden="true"></span>
            </div>
          </summary>

          <div class="community-body">
            <fieldset class="field">
              <legend class="label">El teu pronom</legend>
              <div class="pronouns">
                <label class="pronoun">
                  <input type="radio" name="pronom" value="ell" />
                  <span class="pronoun-btn">Ell</span>
                </label>
                <label class="pronoun">
                  <input type="radio" name="pronom" value="ella" />
                  <span class="pronoun-btn">Ella</span>
                </label>
                <label class="pronoun">
                  <input type="radio" name="pronom" value="le" />
                  <span class="pronoun-btn">Le</span>
                </label>
                <label class="pronoun">
                  <input type="radio" name="pronom" value="altre" />
                  <span class="pronoun-btn">Altre</span>
                </label>
              </div>
            </fieldset>

            <div class="field">
              <label class="label" for="community-nom">Nom</label>
              <input id="community-nom" class="input" type="text" />
            </div>

            <div class="field">
              <label class="label" for="community-email">Correu electrònic</label>
              <input id="community-email" class="input" type="email" />
            </div>

            <div class="field">
              <label class="label" for="community-ciutat">Ciutat</label>
              <input id="community-ciutat" class="input" type="text" />
            </div>

            <div class="field">
              <label class="label" for="community-telefon">Número de telèfon</label>
              <input id="community-telefon" class="input" type="tel" />
            </div>

            <div class="field">
              <label class="label" for="community-aniversari">Aniversari</label>
              <input id="community-aniversari" class="input" type="text" />
            </div>

            <fieldset class="field">
              <legend class="label">En que estàs més interessat</legend>
              <div class="checks">
                <label class="check">
                  <input type="checkbox" />Anuncis del event i entrades
                </label>
                <label class="check">
                  <input type="checkbox" />Anuncis del event i entrades
                </label>
                <label class="check">
                  <input type="checkbox" />Anuncis del event i entrades
                </label>
              </div>
            </fieldset>

            <label class="terms">
              <input type="checkbox" />
              <span>En registrar-te, acceptes els termes i condicions del festival.</span>
            </label>

            <button class="subscribe" type="button">Subscriu-te</button>
          </div>
        </details>
      </div>

      <img class="contact-logo" src="/imagenes/logo-esclat-blanco.png" alt="ESCLAT" />
      <img class="message-pattern" src="/iconos/tramadoArtista.svg" alt="" aria-hidden="true" />
    </section>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 36px clamp(24px, 5vw, 72px) 56px;
  overflow: visible;
  isolation: isolate;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 92px);
  width: min(100%, 1320px);
  margin: 0 auto;
  position: relative;
  z-index: 2;
  min-height: 1500px;
}

.col-right {
  padding-top: 6px;
}

.title {
  color: #000000;
  font-size: 44px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.email {
  margin-top: 10px;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.contact-form {
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 560px;
}

.label {
  display: block;
  color: #000000;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.input {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #000000;
  background: transparent;
  padding: 13px 14px;
  font-size: 18px;
  color: #000000;
  outline: none;
}

.input--message {
  height: 170px;
  resize: none;
}

.send-button {
  margin-top: -2px;
  align-self: flex-start;
  border: 1px solid #000000;
  background: #ffffff;
  color: #000000;
  padding: 12px 18px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.send-button:hover {
  background: #000000;
  color: #ffffff;
}

.send-button:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 2px;
}

.contact-logo {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  display: block;
  width: min(72vw, 1180px);
  max-width: 1180px;
  height: auto;
  z-index: 2;
  filter: invert(1);
  pointer-events: none;
}

.message-pattern {
  position: absolute;
  left: 50%;
  top: 240px;
  transform: translateX(-50%);
  display: block;
  width: min(80vw, 980px);
  max-width: 980px;
  height: auto;
  z-index: 1;
  pointer-events: none;
  opacity: 0.95;
}

.community-title {
  color: #000000;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 0.95;
}

.community {
  margin-top: 24px;
  position: relative;
  z-index: 2;
}

.community-summary {
  list-style: none;
  position: relative;
  z-index: 2;
}

.community-summary::-webkit-details-marker {
  display: none;
}

.community-box {
  border: 1px solid #000000;
  padding: 18px 20px 28px;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.community-box-text {
  margin: 0;
  color: #000000;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.01em;
}

.community-chevron {
  position: absolute;
  right: 18px;
  bottom: 12px;
  width: 18px;
  height: 18px;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  transform: rotate(45deg);
  transform-origin: center;
}

details[open] .community-chevron {
  transform: rotate(225deg);
  bottom: 14px;
}

.community-body {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 580px;
  position: relative;
  z-index: 3;
  background: #ffffff;
  padding: 2px 0 0 22px;
  margin-left: -22px;
}

.community :deep([data-slot="select-content"]) {
  background: #ffffff !important;
  position: relative;
  z-index: 4;
}

.pronouns {
  margin-top: 10px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.pronoun {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.pronoun > input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.pronoun-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 84px;
  padding: 10px 14px;
  border: 1px solid #000000;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0.02em;
  background: transparent;
  user-select: none;
}

.pronoun:hover .pronoun-btn {
  background: #000000;
  color: #ffffff;
}

.pronoun > input:checked + .pronoun-btn {
  background: #000000;
  color: #ffffff;
}

.pronoun > input:focus-visible + .pronoun-btn {
  outline: 2px solid #000000;
  outline-offset: 2px;
}

.checks {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.check {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  color: #000000;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  letter-spacing: 0.02em;
}

.terms {
  margin-top: 6px;
  display: inline-flex;
  gap: 10px;
  align-items: flex-start;
  color: #000000;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0.02em;
}

.subscribe {
  margin-top: 12px;
  align-self: flex-end;
  border: 1px solid #000000;
  background: transparent;
  color: #000000;
  padding: 12px 18px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.subscribe:hover {
  background: #000000;
  color: #ffffff;
}

.subscribe:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 2px;
}

@media (max-width: 900px) {
  .page {
    padding: 24px 18px 12px;
  }

  .layout {
    grid-template-columns: 1fr;
    gap: 34px;
    min-height: auto;
    padding-bottom: 0;
  }

  .title,
  .community-title {
    font-size: clamp(30px, 8vw, 38px);
  }

  .contact-form,
  .community-body {
    max-width: none;
  }

  .contact-form {
    gap: 18px;
    margin-top: 26px;
    margin-bottom: 42px;
  }

  .label {
    font-size: 16px;
  }

  .input {
    font-size: 16px;
    padding: 12px 13px;
  }

  .input--message {
    height: 150px;
  }

  .send-button,
  .subscribe {
    font-size: 16px;
    padding: 11px 16px;
  }

  .message-pattern {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: min(100%, 760px);
    margin: -170px auto -10px;
    order: 1;
  }

  .contact-logo {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: min(100%, 940px);
    margin: -220px auto 0;
    order: 2;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 20px 14px 8px;
  }

  .layout {
    gap: 30px;
  }

  .contact-form {
    margin-bottom: 48px;
  }

  .col-right {
    padding-top: 0;
  }

  .email {
    font-size: 16px;
  }

  .community {
    margin-top: 14px;
  }

  .community-box {
    padding: 16px 16px 24px;
  }

  .community-box-text {
    font-size: 14px;
    line-height: 1.35;
  }

  .community-chevron {
    right: 14px;
    bottom: 10px;
    width: 16px;
    height: 16px;
  }

  .community-body {
    padding: 0;
    margin-left: 0;
    gap: 14px;
  }

  .pronouns {
    gap: 10px;
  }

  .pronoun-btn {
    min-width: 72px;
    padding: 9px 12px;
    font-size: 14px;
  }

  .check,
  .terms {
    font-size: 13px;
  }
}
</style>
