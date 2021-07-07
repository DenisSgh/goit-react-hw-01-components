import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticsData from './data/statistical-data.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statisticsData} />
    </>
  );
};

export default App;
