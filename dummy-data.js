
export function getFeaturedEvents() {
  return data.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return data;
}

export function getFilteredEvents(dateFilter) {
  //console.log(dateFilter)
  //const { year, month } = dateFilter;
  const year = dateFilter[0]
  const month = dateFilter[1]

  let filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    //console.log(eventDate.getFullYear()==year)
    return eventDate.getFullYear() == year && eventDate.getMonth() === month-1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return data.find((event) => event.id === id);
}
