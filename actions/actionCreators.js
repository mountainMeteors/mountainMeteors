// increment
export function submitSurvey(answers) {
  return {
    type: 'SUBMIT_SURVEY',
    answers
  }
}

// add comment
export function addListing(modalType) {
  return {
    type: 'ADD_LISTING',
    modalType
  }
}

// submit comment
export function submitListing(listingId, listingInfo) {
  return {
    type: 'SUBMIT_LISTING',
    listingId,
    listingInfo
  }
}

// remove listing
export function removeListing(listingId) {
  return {
    type: 'REMOVE_LISTING',
    listingId
  }
}
