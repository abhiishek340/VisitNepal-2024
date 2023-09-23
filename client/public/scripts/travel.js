const renderTravel = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/travels') 
    const data = await response.json()

    const travelContent = document.getElementById('gift-content') 
    let travel

    travel = data.find(travel => travel.id === requestedID)

    if (travel) {
        document.getElementById('image').src = travel.image
        document.getElementById('name').textContent = travel.name
        document.getElementById('location').textContent = 'Location: ' + travel.location
        document.getElementById('description').textContent = travel.description
        document.getElementById('contact').textContent = 'Contact: ' + travel.contact
        document.title = `TravelHub - ${travel.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No travels available'
        travelContent.appendChild(message)
    }
}

renderTravel()
