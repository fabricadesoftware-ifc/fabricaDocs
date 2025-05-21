import api from '@/plugin/api'

/**
 * Service class for handling organs related operations.
 */
class OrganService {
  /**
   * Retrieves all organs.
   * @returns {Promise<Array>} A promise that resolves to an array of organs.
   * @throws {Error} If an error occurs while retrieving the organs.
   */
  async getOrgans() {
    try {
      const { data } = await api.get(`/organs`)
      return data.results
    } catch (error) {
      console.log('error in getOrgans', error)
      throw error
    }
  }

  /**
   * Retrieves all organs.
   * @returns {Promise<Array>} A promise that resolves to an array of organs filtered by systems.
   * @throws {Error} If an error occurs while retrieving the organs.
   */
  async getOrgansBySystem(systemId) {
    try {
      const { data } = await api.get(`/organs/?page=1&system_id=${systemId}`)
      return data.results
    } catch (error) {
      console.log('error in getOrgans', error)
      throw error
    }
  }

  async getOrgansById(organ_id) {
    try {
      const { data } = await api.get(`/organs/${organ_id}/`)
      return data
    } catch (error) {
      console.log('error in getOrgansById', error)
      throw error
    }
  }

  /**
   * Creates a new organs.
   * @param {Object} newSpecie - The new organs object to create.
   * @returns {Promise<Object>} A promise that resolves to the created organs object.
   * @throws {Error} If an error occurs while creating the organs.
   */
  async createOrgan(newOrgan) {
    try {
      const { data } = await api.post(`/organs/`, newOrgan)
      return data.results
    } catch (error) {
      console.log('error in createOrgans', error)
      throw error
    }
  }

  /**
   * Updates an existing organs.
   * @param {Object} specie - The organs object to update.
   * @returns {Promise<Object>} A promise that resolves to the updated organs object.
   * @throws {Error} If an error occurs while updating the organs.
   */
  async updateOrgans(organ) {
    try {
      const { data } = await api.put(`/organs/${organ.id}/`, organ)
      return data.results
    } catch (error) {
      console.log('error in updateOrgans')
      throw error
    }
  }

  /**
   * Deletes a organs by its ID.
   * @param {number} id - The ID of the organs to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted organs object.
   * @throws {Error} If an error occurs while deleting the organs.
   */
  async deleteOrgans(id) {
    try {
      const { data } = await api.delete(`/organ/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteOrgan', error)
      throw error
    }
  }
}

export default new OrganService()
