# RPA-transcripts-WebPage



.banner {
  /* placeholder */
  /* requires background image */
  background-color: var(--primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.footer {
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;

  h2 {
    color: var(--light);
  }
}

.skip-link {
  color: var(--light);
  text-decoration: none;
}

.copyright {
  font-size: small;
  color: var(--light);
}

.card-group {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;

  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: rgb(216, 216, 216);
    margin: 2rem 3rem;
    padding: 1rem 2rem;
    border-radius: 1.5rem;
    grid-column: span 4;
    box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.4);
    border: 0.188rem solid var(--primary);
    align-items: center;
  }
}

.btn-group {
  display: flex;
  gap: 2rem;
}

/* media queries */

@media only screen and (min-width: 45em) {
  .nav,
  .banner,
  .footer {
    font-size: 1.1rem;
  }
  .hamburger {
    display: none;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    position: initial;
    right: 0;
    margin: 0;
    padding: 0;
    background-color: var(--light);
    box-shadow: none;

    a {
      width: auto;
    }
  }
}

@media only screen and (min-width: 70em) {
  .nav,
  .banner,
  .footer {
    font-size: 1.27rem;
  }
}




.btn {
  padding: 0.625rem 1.25rem;
  border: 0.125rem solid var(--primary);
  border-radius: 0.313rem;
  width: fit-content;
  font-family: inherit;
  font-size: inherit;
  background-color: var(--primary);
  text-decoration: none;
  color: white;
  cursor: pointer;
  text-align: center;
  align-self: center;
}

.btn:hover {
  background-color: var(--btn-hover);
  border-color: var(--btn-hover);
  color: white;
}