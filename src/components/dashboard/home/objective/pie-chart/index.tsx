import styled from "styled-components";
import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import { dataObjective } from "../data";
import Text from "@/components/materials/text";

export default function DashboardPieChart() {
  return (
    <StyledPieChart>
      {dataObjective.pie_chart.map((item, index) => (
        <div key={index} className="item-container">
          <div className="text-container">
            <Text>
              {item.number} {item.name}
            </Text>
            <span className="progress">
              {item.percent < 1 ? "En cours" : "Complété"}
            </span>
          </div>
          <div className="pie-chart">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius={70}
                outerRadius={50}
                startAngle={90}
                endAngle={-270}
                data={[{ score: item.percent * 100 }]}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  dataKey="score"
                  background={{ fill: "#1B2655" }}
                  fill="url(#linearColors)"
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="score">
              <Text>{item.percent * 100}%</Text>
            </div>
          </div>
        </div>
      ))}
    </StyledPieChart>
  );
}

const StyledPieChart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 36px;
  flex-wrap: wrap;

  .item-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 24px;

    .pie-chart {
      width: 120px;
      height: 120px;
      position: relative;

      .score {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      text-align: center;
      .text {
        color: ${({ theme }) => theme.text_secondary};
        font-size: 18px;
      }
      .progress {
        font-weight: 600;
        font-size: 20px;
      }
    }
  }
`;
