export const formatDate = (dateStr) => {

// ********************************************************************
// **************corrected bug open validated ticket admin*************
// ********************************************************************
  if (!dateStr) {
    return ''
  }
  // console.log(dateStr)
// ********************************************************************
const date = new Date(dateStr)
const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
const mo = new Intl.DateTimeFormat('fr', { month: 'short' }).format(date)
const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
const month = mo.charAt(0).toUpperCase() + mo.slice(1)
return `${parseInt(da)} ${month.substr(0,3)}. ${ye.toString()}`
}
 
export const formatStatus = (status) => {
  switch (status) {
    case "pending":
      return "En attente"
    case "accepted":
      return "Accepté"
    case "refused":
      return "Refused"
  }
}