import api from './apiService'

export const fetchUpcomingTraining = async () => {
    try {
        const response = await api.post('event/getAllEvents', {
            pageNo: 1,
            size: 200
        });
        return response.data;
    } catch (error) {
        console.error("API Error in fetchAllBanner:", error);
        return null;
    }
}