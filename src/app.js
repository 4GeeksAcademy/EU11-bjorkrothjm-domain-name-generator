
// window.onload = function() {
//   //write your code here
//   document.querySelector(".myDomainName").innerHTML = domainNameGenerator()
// };

domainNameGenerator = () => {
  let pronouns = ['the','our'];
  let adjs = ['great', 'big' ];
  let nouns = ['jogger','racoon'];
  let tlds = ['.com', '.se', '.co.uk', '.us', '.fr']

  domainArray = []
  for (pronoun of pronouns){
    for (adj of adjs){
      for (noun of nouns){
        for (tld of tlds){
          console.log(pronoun+adj+noun+tld)  // if we rather print one by one in the console
          // domainArray.push( (pronoun+adj+noun+tld).toString() ) // if we rather print an array with all domain name possibilites
        }
      }
    }
  }
  return domainArray
}

domainNameGenerator()
//console.log(domainNameGenerator())