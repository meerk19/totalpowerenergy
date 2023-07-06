import ComplainContacts from "./ComplainContacts";

const ComplaintsProcedure = ({ complainPolicy }) => {
  const policy = complainPolicy.map((policy) => {
    const pTitle = policy.title || false;
    const pContact = policy.contact;
    const hasList = policy.hasList;
    const pList =
      hasList &&
      policy.list.map((pList) => {
        
        return (
          <div className="d-flex-column align-start" key={pList.id}>
            <ul className="pad-0-30 font-family-1">
              <li>{pList.list}</li>
            </ul>
          </div>
        );
      });
    const policyContact = pContact ? (
      <ComplainContacts pContact={pContact} />
    ) : (
      false
    );

    return (
      <div key={policy.id}>
        <h3 className="font-family-2 display5">{pTitle}</h3>
        <p className="font-family-1 lead medium">{policy.description}</p>
        <div className="d-flex-column gap-6">{pList}</div>
        {policyContact}
      </div>
    );
  });
  return <div>{policy}</div>;
};
export default ComplaintsProcedure;
