import { db, storage } from "@/firebase/firebase.config";
import type {
  NewsletterEmail,
  TConsultation,
  TPicture,
  TPortfolio,
  TPricingPackage,
  TTestimonial,
} from "@/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export const addNewPricingPackageToDB = async (
  newPricingPackage: TPricingPackage,
) => {
  return await addDoc(collection(db, "pricing-packages"), newPricingPackage);
};

export const getPricingPackagesFromDB = async () => {
  let pricingPackages: TPricingPackage[] = [];

  const q = query(collection(db, "pricing-packages"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) =>
    pricingPackages.push({
      id: doc.id,
      ...doc.data(),
    } as TPricingPackage),
  );

  return pricingPackages;
};

export const addNewPCompany = async (picture: Omit<TPicture, "id">) => {
  await addDoc(collection(db, "company"), picture);
};

export const getAllTrustedCompany = async () => {
  let company: TPicture[] = [];

  const querySnapshot = await getDocs(collection(db, "company"));

  querySnapshot.forEach((doc) => {
    company.push({ id: doc.id, ...doc.data() } as TPicture);
  });

  return company;
};

export const deleteCompanyById = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, "company", id));
  const document = querySnapshot.data();

  const docRef = ref(storage, document?.imageUrl);
  await deleteObject(docRef);

  await deleteDoc(doc(db, "company", id));
};

export const addNewTestimonialToDB = async (newTestimonial: TTestimonial) => {
  return await addDoc(collection(db, "testimonials"), newTestimonial);
};

export const getTestimonialsFromDB = async () => {
  let testimonials: TTestimonial[] = [];

  const q = query(collection(db, "testimonials"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) =>
    testimonials.push({
      id: doc.id,
      ...doc.data(),
    } as TTestimonial),
  );

  return testimonials;
};

// portfolios

export const addNewPortfolioToDB = async (newPortfolio: TPortfolio) => {
  try {
    return await addDoc(collection(db, "portfolios"), newPortfolio);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPortfolios = async () => {
  let portfolio: TPortfolio[] = [];

  const querySnapshot = await getDocs(collection(db, "portfolios"));

  querySnapshot.forEach((doc) => {
    portfolio.push({ id: doc.id, ...doc.data() } as TPortfolio);
  });

  return portfolio;
};

export const deletePortfolioById = async (id: string) => {
  return await deleteDoc(doc(db, "portfolios", id));
};

export const addNewConsultation = async (newConsultation: TConsultation) => {
  return await addDoc(collection(db, "consultations"), newConsultation);
};

export const getAllConsultations = async () => {
  let consultations: TConsultation[] = [];

  const querySnapshot = await getDocs(collection(db, "consultations"));

  querySnapshot.forEach((doc) => {
    consultations.push({ id: doc.id, ...doc.data() } as TConsultation);
  });

  // onSnapshot(collection(db, "consulations"), (snapshot) => {
  //   consulations = [];
  //   snapshot.docs.forEach((doc) => {
  //     consulations.push({ id: doc.id, ...doc.data() } as TConsultation);
  //   });
  // });

  return consultations;
};

export const deleteConsultationById = async (id: string) => {
  return await deleteDoc(doc(db, "consultations", id));
};

export const addNewsletterEmail = async (newsletterEmail: NewsletterEmail) => {
  return await addDoc(collection(db, "newsletter"), newsletterEmail);
};

export const getAllNewsletterEmails = async () => {
  let emails: NewsletterEmail[] = [];

  const querySnapshot = await getDocs(collection(db, "newsletter"));

  querySnapshot.forEach((doc) => {
    emails.push({ id: doc.id, ...doc.data() } as NewsletterEmail);
  });

  return emails;
};
