import './Pet.css';
import { useState } from 'react';
import { FaStar, FaShare, FaExpand } from 'react-icons/fa';

const Pet = ({ pet, onEdit, onDelete }) => {
    const [isFavorite, setIsFavorite] = useState(pet.isFavorite || false);
    const [showModal, setShowModal] = useState(false);

    const handleFavorite = async () => {
        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);
        
        try {
            await fetch(`http://localhost:3005/pets/${pet.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isFavorite: newFavoriteStatus })
            });
        } catch (error) {
            console.error('Erro ao atualizar favorito:', error);
            setIsFavorite(!newFavoriteStatus); // reverte em caso de erro
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `Conheça ${pet.nome}!`,
                text: `Conheça a história de ${pet.nome}: ${pet.historia}`,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback para navegadores que não suportam a Web Share API
            const shareText = `${pet.nome}: ${pet.historia}`;
            navigator.clipboard.writeText(shareText)
                .then(() => alert('Link copiado para a área de transferência!'))
                .catch(console.error);
        }
    };

    return (
        <>
            <li className="item-lista">
                <div className="pet-header">
                    <h4>{pet.nome}</h4>
                    <div className="pet-actions">
                        <button 
                            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                            onClick={handleFavorite}
                            title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                        >
                            <FaStar />
                        </button>
                        <button 
                            className="share-btn"
                            onClick={handleShare}
                            title="Compartilhar"
                        >
                            <FaShare />
                        </button>
                        <button 
                            className="expand-btn"
                            onClick={() => setShowModal(true)}
                            title="Ver detalhes"
                        >
                            <FaExpand />
                        </button>
                    </div>
                </div>
                
                <div className="pet-image-container">
                    <img src={pet.foto} alt={pet.nome} onClick={() => setShowModal(true)} />
                    {pet.categoria && (
                        <span className="pet-category">{pet.categoria}</span>
                    )}
                </div>
                
                <p className="pet-description">{pet.historia}</p>
            </li>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
                        <h2>{pet.nome}</h2>
                        <img src={pet.foto} alt={pet.nome} className="modal-image" />
                        <p className="modal-category">Categoria: {pet.categoria || 'Não especificada'}</p>
                        <p className="modal-description">{pet.historia}</p>
                        <div className="modal-actions">
                            <button onClick={handleShare}>Compartilhar</button>
                            <button onClick={handleFavorite}>
                                {isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Pet;