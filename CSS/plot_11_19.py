import numpy as np
import matplotlib.pyplot as plt

# 常量定义
R = 8.314  # 气体常数，单位：J/(mol·K)
n = 2  # 摩尔数

# 初始状态
T_initial = 300  # 温度，单位：K
V_initial = 0.02  # 体积，单位：m^3
P_initial = (n * R * T_initial) / V_initial  # 使用理想气体定律计算初始压强

# 等压膨胀过程
V_final_isobaric = 0.04  # 最终体积
T_final_isobaric = T_initial * (V_final_isobaric / V_initial)  # 温度变化（等压过程）

# 绝热过程
gamma = 1.4  # 空气的绝热指数（近似值）

# 计算绝热过程中的体积和压强
V_adiabatic = np.linspace(V_final_isobaric, V_initial, 100)
P_adiabatic = P_initial * (V_initial / V_adiabatic)**gamma

# 绘制 PV 图
plt.figure(figsize=(10, 6))

# 绘制等压过程
V_isobaric = np.linspace(V_initial, V_final_isobaric, 100)
P_isobaric = np.full_like(V_isobaric, P_initial)
plt.plot(V_isobaric, P_isobaric, label='Isobaric Process (等压过程)', color='b')

# 绘制绝热过程
plt.plot(V_adiabatic, P_adiabatic, label='Adiabatic Process (绝热过程)', color='r')

# 图形设置
plt.xlabel('体积 $V$ (m³)')
plt.ylabel('压强 $P$ (Pa)')
plt.title('PV 图 - 理想气体')
plt.legend()
plt.grid(True)

# 显示图形
plt.show()
