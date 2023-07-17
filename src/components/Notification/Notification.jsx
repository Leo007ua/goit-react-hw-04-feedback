import PropTypes from 'prop-types';
import { NotificationStyled } from './NotificationStyled';


function Notification({message}) {
    return (
        <NotificationStyled>
            <p>{message}</p>
        </NotificationStyled>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification;