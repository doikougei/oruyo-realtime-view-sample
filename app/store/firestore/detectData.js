import { firestoreAction, firestoreOptions } from 'vuexfire'
import { bindDetectDataRef } from '@/plugins/firebase'

// always wait for bindings to be resolved
firestoreOptions.wait = true

export const state = () => ({
  list: []
})

export const getters = {
  list: (state) => state.list
}

export const actions = {
  bindList: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('list', bindDetectDataRef)
  })
}
