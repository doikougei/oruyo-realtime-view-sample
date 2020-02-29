<template>
  <v-container fluid>
    <v-data-iterator :items="detectDataTree" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="sensor in props.items"
            :key="sensor.id"
            cols="12"
            lg="6"
          >
            <v-card min-height="20vh">
              <v-card-title class="subheading font-weight-bold">
                {{ sensor.name }}({{ sensor.id }})
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="beacon in sensor.children"
                  :key="beacon.beaconId"
                >
                  <v-list-item-content>
                    {{ beacon.beaconName }}
                  </v-list-item-content>
                  <v-list-item-content class="align-end">
                    検知日時:
                    {{ new Date(beacon.detectDate).toLocaleString() }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    sensorList: [
      {
        sensorId: 'dev-0001',
        sensorName: 'センサー＃1'
      },
      {
        sensorId: 'dev-0002',
        sensorName: 'センサー＃2'
      }
    ]
  }),
  computed: {
    // FireStoreのデータを取得
    detectDataList() {
      return this.$store.getters['firestore/detectData/list']
    },

    // 画面表示用に加工
    detectDataTree() {
      const output = []

      // データをセンサーでグルーピング
      this.sensorList.map((sensorObj) => {
        // センサーIDが一致するものを取得
        const detectDataList = this.detectDataList.filter(
          (detectData) => detectData.sensorId === sensorObj.sensorId
        )

        // センサー毎に情報を格納
        output.push({
          id: sensorObj.sensorId,
          name: sensorObj.sensorName,
          children: detectDataList
        })
      })
      return output
    }
  },
  created() {
    // StoreにFirestoreのデータを読込
    this.$store.dispatch('firestore/detectData/bindList')
  }
}
</script>
