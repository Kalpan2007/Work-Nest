const Avatar = ({ username, size = 40 }) => {
  const getInitials = (name) => {
    return name
      ?.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || '??';
  };

  return (
    <div 
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#0d084d',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size/2.5,
        fontWeight: 'bold'
      }}
    >
      {getInitials(username)}
    </div>
  );
};

export default Avatar;