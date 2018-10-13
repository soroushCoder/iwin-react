import Direction, { withDirectionPropTypes, DIRECTIONS } from 'react-with-direction';
 
function ForwardsLabel({ direction }) {
  return (
    <div>
      Forwards
      {direction === DIRECTIONS.LTR && <img src="arrow-right.png" />}
      {direction === DIRECTIONS.RTL && <img src="arrow-left.png" />}
    </div>
  );
}
ForwardsLabel.propTypes = {
  ...withDirectionPropTypes,
};
 
export default Direction(ForwardsLabel);