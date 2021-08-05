
  

export let products = [
  {
    id: 1,
    title: "Baptist Health Medical Center",
    image: "/images/products/p1.jpeg",
    distance: "1.5 Km",
    Address: "2 St.Vinvent Circle Little Rock, AR 72205",
    Phone : "+1-212-555-0177",
    description:
      " For nearly 100 years, Baptist Health Medical Center- Little Rock has been delivering quality healthcare to the citizens of Arkansas.The 843-bed medical center is the largest private, not-for-profit hospital in the state and provides comprehensive services using the latest in innovation texhnology",
  },


{
    id: 2,
    title: "CHI St.Vincent Infirmary",
    image: "/images/products/p2.jpeg",
    distance: "1.5 Km",
    Address: "2 St.Vinvent Circle Little Rock, AR 72205",
    Phone : "+1-212-555-0177",
    description:
      " CHI St.Vincent , regional health network serving Arkansas, is part of..",
  },


{
    id: 3,
    title: "UAMS Medical Center",
    image: "/images/products/p3.jpeg",
    distance: "1.5 Km",
    Address: "4031 W Markham St Little Rock, AR 72205",
    Phone :"+1-212-555-0177",
    description:
      " CHI St.Vincent , regional health network serving Arkansas, is part of..",
  }


];


  



export function findProductById(id) {
  let product = products.find(p => p.id === Number(id))
  return product;
}



























