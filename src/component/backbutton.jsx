import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className='back'>
            <button type='button'className='btn btn-success' onClick={() => navigate('/')}>Back to Search Page</button>
        </div>
    );
};

export default BackButton;