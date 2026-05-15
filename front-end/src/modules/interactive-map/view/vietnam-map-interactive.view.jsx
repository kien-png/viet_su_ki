import { Annotation, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import vietnamGeoData from '../../../assets/maps/vietnam-map.json';
import { getMarkerPresentation } from '../model/map-config.service';

const projectionConfig = {
  center: [109.25, 16],
  scale: 2550
};

function getMarkerColors(tone) {
  if (tone === 'selected') {
    return {
      fill: '#d97757',
      stroke: '#f7c792',
      glow: 'rgba(217, 119, 87, 0.32)'
    };
  }

  if (tone === 'capital') {
    return {
      fill: '#c9a35d',
      stroke: '#f7d79a',
      glow: 'rgba(201, 163, 93, 0.2)'
    };
  }

  return {
    fill: '#94a3b8',
    stroke: '#e2e8f0',
    glow: 'rgba(148, 163, 184, 0.16)'
  };
}

function getLabelOffset(longitude) {
  return longitude > 106 ? [26, -18] : [-26, -18];
}

function IslandShape({ x, y, scale = 1 }) {
  return (
    <path
      d="M0,-2 C3,-4 7,-3 9,0 C6,3 2,3 0,-2Z"
      fill="#f3ddab"
      stroke="#c9a35d"
      strokeWidth={0.45}
      transform={`translate(${x}, ${y}) scale(${scale})`}
    />
  );
}

function HoangSaMapCluster() {
  return (
    <g>
      {/* Cụm đảo Hoàng Sa ngoài biển Đông */}
      <IslandShape x={0} y={0} scale={0.85} />
      <IslandShape x={18} y={-8} scale={0.75} />
      <IslandShape x={34} y={6} scale={0.8} />
      <IslandShape x={15} y={18} scale={0.7} />
      <IslandShape x={45} y={22} scale={0.55} />
      <IslandShape x={-12} y={18} scale={0.5} />
      <IslandShape x={28} y={-24} scale={0.45} />
      <IslandShape x={55} y={-6} scale={0.42} />

      
    </g>
  );
}

function TruongSaMapCluster() {
  return (
    <g>
      {/* Cụm đảo Trường Sa trải dài hơn */}
      <IslandShape x={0} y={0} scale={0.65} />
      <IslandShape x={25} y={10} scale={0.58} />
      <IslandShape x={48} y={-4} scale={0.6} />
      <IslandShape x={72} y={18} scale={0.55} />
      <IslandShape x={96} y={0} scale={0.5} />
      <IslandShape x={118} y={24} scale={0.48} />
      <IslandShape x={38} y={36} scale={0.5} />
      <IslandShape x={70} y={48} scale={0.45} />
      <IslandShape x={103} y={45} scale={0.42} />
      <IslandShape x={135} y={36} scale={0.38} />
      <IslandShape x={18} y={58} scale={0.36} />
      <IslandShape x={150} y={10} scale={0.34} />

    
    </g>
  );
}

export function VietnamMapInteractiveView({ locations, selectedLocationId, onSelectLocation }) {


  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-amber-200/10 bg-[radial-gradient(circle_at_top,_rgba(201,163,93,0.14),_rgba(12,10,9,0.96)_52%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.28))]" />

      {/* Tiêu đề và tooltip hướng dẫn */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-brass">Bản đồ tương tác</p>
          <div className="group relative">
            <button
              className="flex h-5 w-5 items-center justify-center rounded-full border border-brass/40 bg-black/60 text-brass transition-all hover:border-brass hover:bg-brass/20"
              type="button"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
            {/* Tooltip */}
            <div className="pointer-events-none absolute bottom-full left-0 mb-2 w-64 rounded-lg border border-amber-200/20 bg-black/95 p-3 opacity-0 shadow-xl transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
              <p className="text-xs leading-relaxed text-stone-300">
                Chạm vào các chấm sáng để mở thông tin lịch sử của từng địa danh trên dải đất Việt Nam.
              </p>
              <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 border-b border-r border-amber-200/20 bg-black/95" />
            </div>
          </div>
        </div>
      </div>

      {/* SVG Map Container với kích thước cố định */}
      <div className="absolute inset-0">
        <ComposableMap
          className="h-full w-full"
          projection="geoMercator"
          projectionConfig={projectionConfig}
          viewBox="0 0 680 760"
        >
          <Geographies geography={vietnamGeoData}>
            {({ geographies }) =>
              geographies.map((geography) => (
                <Geography
                  key={geography.rsmKey}
                  geography={geography}
                  style={{
                    default: {
                      fill: '#241818',
                      stroke: '#c9a35d',
                      strokeWidth: 0.7,
                      outline: 'none',
                      filter: 'drop-shadow(0 0 18px rgba(201, 163, 93, 0.08))'
                    },
                    hover: {
                      fill: '#30201c',
                      stroke: '#e4bf7f',
                      strokeWidth: 0.9,
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#38211f',
                      stroke: '#f7d79a',
                      strokeWidth: 1,
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>

          {/* Quần đảo Hoàng Sa và Trường Sa - đặt trực tiếp trên vùng biển Đông */}
          <Marker coordinates={[112.4, 16.3]}>
            <g transform="translate(-18, -18) scale(0.58)">
              <HoangSaMapCluster />
            </g>
          </Marker>

          <Marker coordinates={[114.0, 9.8]}>
            <g transform="translate(-38, -34) scale(0.46)">
              <TruongSaMapCluster />
            </g>
          </Marker>


          {/* Các địa điểm lịch sử */}
          {locations.map((location) => {
            const isSelected = location.id === selectedLocationId;
            const presentation = getMarkerPresentation(isSelected, location.type);
            const colors = getMarkerColors(presentation.tone);

            return (
              <g key={location.id}>
                <Marker coordinates={[location.coordinates.longitude, location.coordinates.latitude]}>
                  <g
                    className="cursor-pointer transition-transform duration-300"
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelectLocation(location.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        onSelectLocation(location.id);
                      }
                    }}
                  >
                    <circle cx="0" cy="0" fill={colors.glow} r={presentation.glowRadius} />
                    <circle
                      className={isSelected ? 'animate-pulse' : ''}
                      cx="0"
                      cy="0"
                      fill={colors.fill}
                      r={presentation.radius}
                      stroke={colors.stroke}
                      strokeWidth="2"
                    />
                    <circle cx="0" cy="0" fill="#fff5e6" r="1.4" />
                  </g>
                </Marker>

                {isSelected && (
                  <Annotation
                    connectorProps={{
                      stroke: '#f7d79a',
                      strokeWidth: 1.4
                    }}
                    dx={getLabelOffset(location.coordinates.longitude)[0]}
                    dy={getLabelOffset(location.coordinates.longitude)[1]}
                    subject={[location.coordinates.longitude, location.coordinates.latitude]}
                  >
                    <g>
                      <rect fill="rgba(8, 8, 7, 0.88)" height="26" rx="6" width={location.name.length * 8.4 + 18} x="0" y="-18" />
                      <text fill="#f3ddab" fontSize={11} letterSpacing="0.08em" x="10" y="-1">
                        {location.name}
                      </text>
                    </g>
                  </Annotation>
                )}
              </g>
            );
          })}
        </ComposableMap>
      </div>

      {/* Chú thích loại địa điểm */}
      <div className="absolute bottom-4 right-4 space-y-4 text-xs text-stone-400">
        {/* Loại địa điểm */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400 ring-4 ring-amber-400/15" />
            <span className="uppercase tracking-wider">Kinh đô / Trung tâm</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-4 ring-slate-300/10" />
            <span className="uppercase tracking-wider">Di tích và chiến địa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
