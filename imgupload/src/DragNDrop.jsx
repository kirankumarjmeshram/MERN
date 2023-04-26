function DragNDrop() {
  return (
    <div
      draggable
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOverItem.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
      key={Math.random(Date.now())}
    >
      <li
        key={Math.random(Date.now())}
        className="list-group-item list-group-item-action cursor-pointer"
        style={{
          marginBottom: "10px",
          borderRadius: "30px",
          // backgroundColor: "#e6e6e6",
        }}
      >
        {stockistArr.length === 1 ? (
          <span style={{ float: "right" }}>
            <TooltipOverlay text="Cilck here to delete">
              <span>
                <IoCloseSharp
                  className="mx-3 delete-red"
                  onClick={(e) => {
                    handleDeleteDD(e, index);
                  }}
                />
              </span>
            </TooltipOverlay>
          </span>
        ) : (
          <>
            {index === 0 ? (
              <>
                <span style={{ float: "right" }}>
                  <TbArrowNarrowDown />
                  <TooltipOverlay text="Cilck here to delete">
                    <span>
                      <IoCloseSharp
                        className="mx-3 delete-red"
                        onClick={(e) => {
                          handleDeleteDD(e, index);
                        }}
                      />
                    </span>
                  </TooltipOverlay>
                </span>
              </>
            ) : index === stockistArr.length - 1 ? (
              <>
                <span style={{ float: "right" }}>
                  <TbArrowNarrowUp />
                  <TooltipOverlay text="Cilck here to delete">
                    <span>
                      <IoCloseSharp
                        className="mx-3 delete-red"
                        onClick={(e) => {
                          handleDeleteDD(e, index);
                        }}
                      />
                    </span>
                  </TooltipOverlay>
                </span>
              </>
            ) : (
              <>
                <span style={{ float: "right" }}>
                  <RiArrowUpDownFill />
                  <TooltipOverlay text="Cilck here to delete">
                    <span>
                      <IoCloseSharp
                        className="mx-3 delete-red"
                        onClick={(e) => {
                          handleDeleteDD(e, index);
                        }}
                      />
                    </span>
                  </TooltipOverlay>
                </span>
              </>
            )}
          </>
        )}

        <span id={`${index + "id"}`}>
          {index + 1}. {option.stockist_name}
        </span>
      </li>
    </div>
  );
}
