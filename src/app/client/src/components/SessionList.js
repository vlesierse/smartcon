import React from "react";

const SessionListItem = ({ session }) => {
  let sessionFooter = "";
  if (session.date) sessionFooter += session.date;
  if (session.time) sessionFooter += " " + session.time;
  if (session.place) sessionFooter += " | " + session.place;
  if (session.category) sessionFooter += " | " + session.category.name;
  if (session.skill) sessionFooter += " | " + session.skill.name;

  return (
    <div className="media text-muted pt-3">
      <svg
        className="bd-placeholder-img mr-3 rounded"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: 32x32"
      >
        <rect width="100%" height="100%" fill="#007bff" />
      </svg>
      <p className="media-body pb-3 mb-2 small lh-125 border-bottom text-truncate">
        <strong class="d-block text-gray-dark">{session.title}</strong>
        {session.description}
        <br />
        {sessionFooter}
      </p>
    </div>
  );
};

const SessionList = ({ sessions, title }) => {
  return (
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      {title ? (
        <h6 className="border-bottom border-gray pb-2 mb-0">{title}</h6>
      ) : (
        ""
      )}
      {sessions.map(session => (
        <SessionListItem key={session.id} session={session} />
      ))}
    </div>
  );
};

export default SessionList;
