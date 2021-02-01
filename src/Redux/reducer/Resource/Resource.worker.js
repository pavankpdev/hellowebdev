// Utilities
import { getCurrentDateTime } from "../../../utils";
import {
  getConditionDataFromFirebase,
  addNewDocumentToFirebase,
  getDocumentID,
  updateArrayOfObject,
} from "../../../utils/firebase/firebase.util";

export const addNewResourceData = async (
  newResourceData,
  currentResourceID
) => {
  await addNewDocumentToFirebase("resources", {
    uploadDate: getCurrentDateTime("date"),
    id: currentResourceID,
    ...newResourceData,
  });
};

export const updateContributorData = async (newResourceData) => {
  let ContributorExist = await getConditionDataFromFirebase("contributors", {
    id: newResourceData.contributor.id,
  });

  if (ContributorExist.length === 0) {
    await addNewDocumentToFirebase("contributors", {
      username: newResourceData.contributor.username,
      image: newResourceData.contributor.image,
      name: newResourceData.contributor.name,
      id: newResourceData.contributor.id,
      contributorType: "resource",
    });
  }
};

export const updateUserContributionData = async (
  newResourceData,
  currentResourceID
) => {
  const documentIdofUser = await getDocumentID("users", {
    id: newResourceData.contributor.id,
  });

  updateArrayOfObject("users", documentIdofUser, "contribution", {
    resourceType: newResourceData.resourceType,
    resourceId: currentResourceID,
    name: newResourceData.name,
    description: newResourceData.description,
  });
};

export const updateCategories = async (newResourceData) => {
  newResourceData.category.forEach(async (cat) => {
    let CategoryExist = await getConditionDataFromFirebase("categories", {
      id: cat.toLowerCase(),
    });

    if (CategoryExist.length === 0)
      return await addNewDocumentToFirebase("categories", {
        id: cat.toLowerCase(),
        label: cat.toLowerCase(),
        value: cat,
      });

    return;
  });
};

export const updateKeywords = async (newResourceData) => {
  newResourceData.keywords.forEach(async (keys) => {
    let KeywordsExist = await getConditionDataFromFirebase("keywords", {
      id: keys.toLowerCase(),
    });
    if (KeywordsExist.length === 0)
      return await addNewDocumentToFirebase("keywords", {
        id: keys.toLowerCase(),
        label: keys.toLowerCase(),
        value: keys,
      });
    return;
  });
};

export const updateLanguage = async (newResourceData) => {
  newResourceData.language.forEach(async (lang) => {
    let LanguageExist = await getConditionDataFromFirebase("languages", {
      id: lang.toLowerCase(),
    });
    if (LanguageExist.length === 0)
      return await addNewDocumentToFirebase("languages", {
        id: lang.toLowerCase(),
        label: lang.toLowerCase(),
        value: lang,
      });
    return;
  });
};
