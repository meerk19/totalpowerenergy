const ComplainContacts = ({pContact}) => {
  return pContact.map((pCon) => {
    return (
      <div className="d-flex-row justify-start" key={pCon.id}>
        <p className="font-family-1 bold">{pCon.title}:</p>
        {pCon.title === "Telephone" && (
          <p className="font-family-1 ">
            <a className="lead medium" href={`tel:${pCon.detail}`}>
              {pCon.detail}
            </a>
          </p>
        )}
        {pCon.title === "Email" && (
          <p className="font-family-1 ">
            <a className="lead " href={`mailto:${pCon.detail}`}>
              {pCon.detail}
            </a>
          </p>
        )}
        {pCon.title === "Post" && (
          <p className="font-family-1 lead medium ">{pCon.detail}</p>
        )}
        {pCon.title === "Online" && (
          <p className="font-family-1 ">
            <a
              className="lead "
              target="_blank"
              rel="noopener noreferrer"
              href={`${pCon.detail}`}
            >
              {pCon.detail}
            </a>
          </p>
        )}
      </div>
    );
  });
};

export default ComplainContacts;

