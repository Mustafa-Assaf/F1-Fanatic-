function PredictionCard(props) {
  const meeting = props.meetings.find(
    (meeting) => meeting.id === props.prediction.meeting_key
  );

  //   console.log(props);
  //   console.log("prediction:", props.prediction);

  return (
    <div className="bg-[#252525] text-white rounded-xl p-6 border border-gray-700">
      <span className="inline-block bg-green-900 text-green-400 rounded-full px-4 py-1 mb-4">
        Submitted
      </span>

      <h2 className="text-2xl font-bold mb-4">{meeting?.meeting_name}</h2>

      <p className="text-gray-400 mb-6">{meeting?.date_start}</p>

      <div className="border-t border-gray-600 pt-4 space-y-3">
        {props.drivers.length ? (
          <>
            <p>
              1st Place:{" "}
              {
                props.drivers.find(
                  (driver) =>
                    driver.driver_number ===
                    props.prediction.predicted_positions[0]
                ).full_name
              }
            </p>
            <p>
              2nd Place:{" "}
              {
                props.drivers.find(
                  (driver) =>
                    driver.driver_number ===
                    props.prediction.predicted_positions[1]
                ).full_name
              }
            </p>
            <p>
              3rd Place:{" "}
              {
                props.drivers.find(
                  (driver) =>
                    driver.driver_number ===
                    props.prediction.predicted_positions[2]
                ).full_name
              }
            </p>
            <p>
              4th Place:{" "}
              {
                props.drivers.find(
                  (driver) =>
                    driver.driver_number ===
                    props.prediction.predicted_positions[3]
                ).full_name
              }
            </p>
            <p>
              5th Place:{" "}
              {
                props.drivers.find(
                  (driver) =>
                    driver.driver_number ===
                    props.prediction.predicted_positions[4]
                ).full_name
              }
            </p>
          </>
        ) : (
          <span>loading</span>
        )}
      </div>

      <button onClick = {() => props.onEdit(props.prediction)} className="w-full bg-red-600 hover:bg-red-700 rounded-lg p-3 mt-6 font-bold">
        Edit Prediction
      </button>

      <button onClick={() => props.onDelete(props.prediction.id)} className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-3 mt-3 font-bold">
    Delete Prediction
    </button>

    </div>
  );
}

export default PredictionCard;
