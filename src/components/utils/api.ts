export async function getTestimonials() {
  try {
    const res = await fetch("http://localhost:3000/testimonials");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong! Cannot fetch Testimonials.");
  }
}

export async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong! Cannot fetch Products.");
  }
}

export async function getTeams() {
  try {
    const res = await fetch("http://localhost:3000/team");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong! Cannot fetch Team members.");
  }
}
