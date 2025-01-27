import { LocalGithubUser } from "../../types";
import { UserStat } from "../UserStat";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
