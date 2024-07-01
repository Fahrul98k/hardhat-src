const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// module.exports = buildModule("Apollo", (m) => {
//   const apollo = m.contract("Rocket", ["Saturn V"]);

//   m.call(apollo, "launch", []);

//   return { apollo };
// });


module.exports = buildModule("Rocket", (m) => { 
  const a = m.contract("Rocket", ["Rocket", "RKT"]) ; 
  m.call(a,"halo") ;

  return { a } ; 
})


