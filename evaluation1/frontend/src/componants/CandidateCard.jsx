import styles from "./CandidateCard.module.css";


function CandidateCard({avatar,name,company_name,salary}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" src={avatar} width="100px" height="100px" />
      <div>
        <div>Name:{name}</div>
        <div>{company_name}</div>
      </div>
      <div>${salary}</div>
    </div>
  );
}

export default CandidateCard;
