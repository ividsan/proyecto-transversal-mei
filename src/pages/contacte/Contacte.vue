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
  overflow: hidden;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 92px);
  width: min(100%, 1320px);
  margin: 0 auto;
  position: relative;
  z-index: 1;
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

.message-pattern {
  position: absolute;
  left: 50%;
  top: -240px;
  transform: translateX(-50%);
  display: block;
  width: min(170vw, 2200px);
  max-width: 2200px;
  height: auto;
  z-index: 0;
  pointer-events: none;
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
  z-index: 2;
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
}

@media (max-width: 900px) {
  .page {
    padding: 28px 24px 48px;
  }

  .layout {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .title,
  .community-title {
    font-size: 38px;
  }

  .contact-form,
  .community-body {
    max-width: none;
  }

  .message-pattern {
    top: -160px;
    width: min(190vw, 1500px);
    max-width: 1500px;
  }
}
</style>
