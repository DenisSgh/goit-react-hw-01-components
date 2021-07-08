import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <span className={styles.status} isonline={isOnline.toString()}></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  friends: PropTypes.shape({
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  }),
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
