// Question: We have a list of events to show to the user. These events are retrieved by the function
// getEvents(type) - returns promise which resolves with the events of a given type
// There are 3 event types - offering, capital call, and distribution.
// Make the requests for these events in an optimal manner, then display the results. If there are errors, show them.

async function getSortEvents() {
  const events = [];
  const errors = [];
  const offeringPromise = getEvents('offering').then(arr => events.push(arr)).catch(e => errors.push(e.message));
  const capitalPromise = getEvents('capitalCall').then(arr => events.push(arr)).catch(e => errors.push(e.message));
  const distributionPromise = getEvents('distributions').then(arr => events.push(arr)).catch(e => errors.push(e.message));
  return await promise.all([offeringPromise, capitalPromise, distributionPromise]).then(() => {
    return {
      events: events.sort(sortTimestamp),
      errors,
    };
  })
}

function sortTimestamp(a, b) {
  return a.timestamp > b.timestamp
}

// render: label, message

function eventList(props) {
  const { events, errors } = props;
  return (
    <div>
      {errors ? (<p>{errors.map(error => error + '' )}</p>) : ''}
      {events ? (
        <ul>
          {events.map(event =>
            {
              let content;
              switch (event.type) {
                case 'offering':
                  content = renderOffering();
                // repeat for other event types
              }
              return (
                <li>
                  {content}
                </li>)
            })}
        </ul>
      ) : ''}
    </div>
  )
}

function renderOffering(offering) {
  return (
    <div></div>
  )
}
