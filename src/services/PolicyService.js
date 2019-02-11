export const getExpiringPolicies = () => {
  var json = [
    {
      MemberName: "Swaroop",
      PolicyNumber: "08391A05A9",
      PhoneNumber: 9032527237,
      Email: "swaroop.anu46@gmail.com",
      NomineeName: "SwaroopNominee",
      Amount: 5000,
      Tenure: 12,
      DateOfAmount: "",
      Address: "",
      AmountMode: ""
    },
    {
      MemberName: "Ramu",
      PolicyNumber: "08391A0567",
      PhoneNumber: 8885030100,
      Email: "ramu.achala1@gmail.com",
      NomineeName: "RamuNominee",
      Amount: 7500,
      Tenure: 18,
      DateOfAmount: "",
      Address: "",
      AmountMode: ""
    },
    {
      MemberName: "Phaneendra",
      PolicyNumber: "08391A0516",
      PhoneNumber: 8121263383,
      Email: "phani.516@gmail.com",
      NomineeName: "PhaniNominee",
      Amount: 8000,
      Tenure: 15,
      DateOfAmount: "",
      Address: "",
      AmountMode: ""
    },
    {
      MemberName: "Saibabu",
      PolicyNumber: "08391A05B4",
      PhoneNumber: 9963209407,
      Email: "saibabu.cse08@gmail.com",
      NomineeName: "SaibabuNominee",
      Amount: 12500,
      Tenure: 24,
      DateOfAmount: "",
      Address: "",
      AmountMode: ""
    }
  ];
  return json;
};

export const getAllPolicies = () => {
  let policies = localStorage.getItem("policies");
  if (policies !== null) {
    return JSON.parse(policies);
  } else {
    return [];
  }
};

export const addPolicy = policy => {
  let policies = getAllPolicies();
  policies.push(policy);
  localStorage.setItem("policies", JSON.stringify(policies));
  return true;
};
